import React from 'react';
import { IAsset } from '../App';

interface IState {}
interface IProps {
    count: number;
    assets: IAsset[];
}

export default class ShowSum extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        console.log(this.props, "showsum in constructor");
        }
       
        
     componentDidMount(){

        console.log(this.props.assets, "showsum");//.reduce((acc:number, curVal: JSX.Element) => {
           //return acc+curVal.asset_value;
        //});
     }   
        render() {
            return (
            <tr className="sumline">
                <td>total: {this.props.count}</td>
                <td>sum: {this.props.assets} </td>
                <td></td>
            </tr>
        )
        }
    };

   /* {
        "delete_function": "bound handleDeleteAsset()",
        "edit_mode": false,
        "asset": {
          "_id": "5d9da25d97372d0000f52ce0",
          "asset_name": "asb",
          "asset_value": "1235",
          "__v": 0
        }
      }*/