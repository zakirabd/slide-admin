import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchWaitingOrders, readyWaitingOrders, fetchPreparedOrders, fetchNewOrders, fetchWaitingOrdersTotal, fetchPreparedOrdersTotal} from '../../actions/MainActions';

export class Section3 extends Component {
    componentDidMount () {
        this.props.fetchWaitingOrders();
        this.props.fetchWaitingOrdersTotal();
    }
    readyOrderBtn (id, e) {
        this.props.readyWaitingOrders(id)
        this.props.fetchNewOrders();
        this.props.fetchWaitingOrders();
        this.props.fetchPreparedOrders();
        this.props.fetchWaitingOrdersTotal();
        this.props.fetchPreparedOrdersTotal();
    }
    render() {
        const { waitingOrder, waitingOrdersTotal} = this.props;
        return (
            <div className="waited-orders-container containers display" id="section-3">
                {
                    waitingOrdersTotal.map((total, i) =>{
                        return (
                            <h3 className="waited-order-header" key={i}>Gözləmədə Olan Sifarişlər ({total.total})</h3>
                        )
                    })
                }
                <div className="waited-orders">
                    <table className="waited-orders-table">
                        <tbody>
                            <tr>
                                <th>Mövzu</th>
                                <th>Səhifə Sayı</th>
                                <th>Nömrə</th>
                                <th>Hazırlandı</th>
                            </tr>
                            {
                                waitingOrder.map((result, i) =>{
                                    return (
                                        <tr className="waitd-order-list" key={i}>
                                            <td>{result.topic}</td>
                                            <td>{result.pageNumber}</td>
                                            <td>{result.number}</td>
                                            <td><button onClick={this.readyOrderBtn.bind(this, result.id)} className="ready-btn"><i className="fas fa-check"></i> Hazırlandı</button></td>
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
    waitingOrder: state.Data.waitingOrder,
    waitingOrdersTotal: state.Data.waitingOrdersTotal
})

const mapDispatchToProps = {fetchWaitingOrders, readyWaitingOrders, fetchPreparedOrders, fetchNewOrders, fetchWaitingOrdersTotal, fetchPreparedOrdersTotal}
export default connect(mapStateToProps, mapDispatchToProps)(Section3)
