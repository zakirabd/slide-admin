import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewOrders, acceptNewOrders, removeNewOrders, fetchWaitingOrders, fetchRemovedOrders, fetchNewOrdersTotal, fetchRemovingOrdersTotal, fetchWaitingOrdersTotal } from '../../actions/MainActions';

export class Section2 extends Component {
    componentDidMount(){
        this.props.fetchNewOrders();
        this.props.fetchNewOrdersTotal();
        if (localStorage.getItem('zPresentationLogin') !== 'e3afed0047b08059d0fada10f400c1e5'){
            document.querySelector('.containers').classList.remove('display');
        }
        
    }
    acceptOrder (id, e) {
        this.props.acceptNewOrders(id);
        this.props.fetchNewOrders();
        this.props.fetchWaitingOrders();
        this.props.fetchNewOrdersTotal();
        this.props.fetchWaitingOrdersTotal();
    }
    removeOrder (id, e) {
        this.props.removeNewOrders(id)
        this.props.fetchNewOrders();
        this.props.fetchRemovedOrders();
        this.props.fetchNewOrdersTotal();
        this.props.fetchRemovingOrdersTotal();
    }
    render() {
        const {newOrders, newOrdersTotal} = this.props;
      
        return (
            <div className="new-order-container containers display" id="section-2">
                {
                    newOrdersTotal.map((total, i) =>{
                        return(
                            <h3 className="new-order-header" key={i}>Yeni Gələn Sifarişlər ({total.total})</h3>
                        )
                    })
                }
                
                <div className="new-orders">
                    <table className="new-order-table">
                        <tbody>
                            <tr>
                                <th>Mövzu</th>
                                <th>Səhifə Sayı</th>
                                <th>Nömrə</th>
                                <th>Qəbul et</th>
                                <th>Sil</th>
                            </tr>
                            {
                                newOrders.map((result, i) =>{
                                    return (
                                        <tr className="new-order-list" key={i}>
                                            <td>{result.topic}</td>
                                            <td>{result.pageNumber}</td>
                                            <td>{result.number}</td>
                                            <td><button className="accept-btn" onClick={this.acceptOrder.bind(this, result.id)}><i className="fas fa-check"></i> Qəbul et</button></td>
                                            <td><button className="remove-btn" onClick={this.removeOrder.bind(this, result.id)}><i className="fas fa-trash"></i> Sil</button></td>
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
const mapStateToProps = (state) =>({
    newOrders: state.Data.newOrders,
    newOrdersTotal: state.Data.newOrdersTotal
})
const mapDispatchToProps = {fetchNewOrders, acceptNewOrders, removeNewOrders, fetchWaitingOrders, fetchRemovedOrders, fetchNewOrdersTotal, fetchRemovingOrdersTotal, fetchWaitingOrdersTotal}
export default connect(mapStateToProps, mapDispatchToProps)(Section2)
