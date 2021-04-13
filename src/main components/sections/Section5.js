import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchRemovedOrders, fetchRemovingOrdersTotal } from '../../actions/MainActions';

export class Section5 extends Component {
    componentDidMount () {
        this.props.fetchRemovedOrders();
        this.props.fetchRemovingOrdersTotal();
    }
    render() {
        const {removeOrders, removingOrdersTotal} = this.props;
        return (
            <div className="remove-orders-container containers display" id="section-5">
                {
                    removingOrdersTotal.map((total, i) => {
                        return (
                            <h3 className="remove-order-header" key={i}>Silinən Sifarişlər ({total.total})</h3>
                        )
                    })
                }
                <div className="remove-orders">
                    <table className="remove-orders-table">
                        <tbody>
                            <tr>
                                <th>Mövzu</th>
                                <th>Səhifə Sayı</th>
                                <th>Nömrə</th>
                            </tr>
                            {
                                removeOrders.map((result, i) => {
                                    return (
                                        <tr className="remove-order-list" key={i}>
                                            <td>{result.topic}</td>
                                            <td>{result.pageNumber}</td>
                                            <td>{result.number}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    removeOrders: state.Data.removeOrders,
    removingOrdersTotal: state.Data.removingOrdersTotal
})
const mapDispatchToProps = {fetchRemovedOrders, fetchRemovingOrdersTotal}
export default connect(mapStateToProps, mapDispatchToProps)(Section5)
