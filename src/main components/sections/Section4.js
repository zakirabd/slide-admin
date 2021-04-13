import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPreparedOrders, fetchPreparedOrdersTotal } from '../../actions/MainActions';

export class Section4 extends Component {
    componentDidMount (){
        this.props.fetchPreparedOrders();
        this.props.fetchPreparedOrdersTotal();
    }
    render() {
        const {preparedOrders, preparedOrdersTotal} = this.props;
        return (
            <div className="ready-orders-container containers display" id="section-4">
                {
                    preparedOrdersTotal.map((total, i) =>{
                        return (
                            <h3 className="ready-order-header" key={i}>Hazırlanan Sifarişlər ({total.total})</h3>
                        )
                    })
                }
                <div className="ready-orders">
                    <table className="ready-orders-table">
                        <tbody>
                            <tr>
                                <th>Mövzu</th>
                                <th>Səhifə Sayı</th>
                                <th>Nömrə</th>
                                <th>Hazırlanma Vaxtı</th>
                            </tr>
                            {
                                preparedOrders.map((result, i) => {
                                    return (
                                        <tr className="ready-order-list" key={i}>
                                            <td>{result.topic}</td>
                                            <td>{result.pageNumber}</td>
                                            <td>{result.number}</td>
                                            <td>{result.readyDate}</td>
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
    preparedOrders: state.Data.preparedOrders,
    preparedOrdersTotal: state.Data.preparedOrdersTotal
})

const mapDispatchToProps = {fetchPreparedOrders, fetchPreparedOrdersTotal}
export default connect(mapStateToProps, mapDispatchToProps)(Section4)
