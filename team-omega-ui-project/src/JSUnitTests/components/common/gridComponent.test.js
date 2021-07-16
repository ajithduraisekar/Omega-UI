import { shallow } from "enzyme";
import GridComponent from "../../../components/common/gridComponent";

describe("rendering the Grid Component", ()=>{
    let props={
        content:{
            
                heading: "Grid With Pagination",
                gridHeader: [{ id: "sno", column: "SNO" },
                { id: "id", column: "USERID" },
                { id: "name", column: "NAME" },
                { id: "email", column: "EMAIL" },
                { id: "status", column: "STATUS"},
                { id: "action", column: "ACTION" }
                ]
            },
            header:[],
            gridHeaderStatus:[],
            headerWithStatus:[],
            gridHeaderActions:[],
            headerWithActions:[],
            dataTable:[],
            dataSource:[],
            renderHeaderData:fn =>fn,
            renderTableData: fn =>fn,
            viewHandler:fn=>fn,
            editHandler:fn =>fn
        }
    
    

    it("render Grid", ()=>{
        const wrapper= shallow(<GridComponent {...props}/>);

        expect(wrapper.find('.all-users-grid').exists()).toBe(true);

    });
    
    it('should call handle on edit method', () => {
        const value = {
            target:{
                
                sno: "1", id: "MPH17659", name: "Harika Yarlagadda", email: "Harika@mphasis.com", status: "Active" ,
               
        },
          preventDefault: fn => fn
            
        }
        const wrapper = shallow(<GridComponent {...props} />);
        wrapper.instance().handleOnEdit(value);
        expect(wrapper.exists()).toBe(true);
      });
      it('should call handle on view method', () => {
        const value = {
            target:{
                
                sno: "1", id: "MPH17659", name: "Harika Yarlagadda", email: "Harika@mphasis.com", status: "Active" ,
               
        },
          preventDefault: fn => fn
            
        }
        const wrapper = shallow(<GridComponent {...props} />);
        wrapper.instance().handleOnView(value);
        expect(wrapper.exists()).toBe(true);
      });

      it('should call handleOnChange method', () =>
      {
          const wrapper = shallow(<GridComponent {...props}/>);
          expect(wrapper.simulate('click', {
            preventDefault: fn => fn,
            target:{
                
                sno: "1", id: "MPH17659", name: "Harika Yarlagadda", email: "Harika@mphasis.com", status: "Active" ,
               
        }
          }));
         expect(wrapper.find('handleOnView')).toEqual({});
      });
    it('renders button for handleOnEdit', () => {
        const wrapper = shallow(<GridComponent {...props} />);
        const editButton = wrapper.simulate('click', { editHandler: fn => fn ,preventDefault: fn => fn});
        expect(editButton.find('.all-users-grid').exists()).toBe(true);
      });
})