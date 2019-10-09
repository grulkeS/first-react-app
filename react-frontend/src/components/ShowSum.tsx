import React from 'react';
import { IAsset } from '../App';

interface IState { }
interface IProps {
    count: number;
    assets: IAsset[];
}

export default class ShowSum extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.sum=this.sum.bind(this);
        console.log(this.props, "showsum in constructor");
    }


    componentDidMount() {

        console.log(this.props.assets, "showsum");//.reduce((acc:number, curVal: JSX.Element) => {
        //return acc+curVal.asset_value;
        //});
    }
    sum() {
        let initialVal: number = 0;
        return this.props.assets.reduce((acc, currentVal) => {
            return acc + currentVal.asset_value;
        }, initialVal)

    }
    render() {
        
        return (
            <tr className="sumline">
                <td>total: {this.props.count}</td>
                <td>sum: {this.sum()}</td>
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