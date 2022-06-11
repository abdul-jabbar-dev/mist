import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { invoices } from "../../../Api/invoice";
import logo from "../../../resource/headerlogo.png"

const InvoiceDetails = () => {
    const { invoiceId } = useParams()

    const [myInvoice, setMyInvoice] = useState({});
    useEffect(() => {
        setMyInvoice(invoices.find(invoice => invoice.invoiceId === invoiceId))
    }, [invoiceId]);
    console.log(myInvoice)
    return (
        <div className=''>
            <section className="bg-gray-100 ">
                <div className="max-w-2xl mx-auto py-0 md:py-16">
                    <article className="shadow-none md:shadow-md md:rounded-md overflow-hidden">
                        <div className="md:rounded-b-md  bg-white ">
                            <div className="p-9 border-b border-gray-200">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-top">
                                        <div className="space-y-4">
                                            <div>
                                                <img alt="d" className="h-8 object-cover mb-4" src={logo} />
                                                <p className=" text-lg uppercase"> Model Institute of science and technology</p>
                                                <p className="font-bold text-2xl"> Invoice  <span className="text-3xl text-slate-500 font-normal"># {myInvoice.invoiceId}</span></p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm text-gray-400"> Billed To </p>
                                                <p>{myInvoice?.billTo} </p>
                                                <p> abduljabbar@abduljabbar.xyz </p>
                                                <p> (+88)01733941913 </p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {myInvoice.deuBill > 0 ? <h2 className="py-3 text-center my-4 uppercase text-red-400 font-extrabold outline-dotted outline-4 outline-red-500">Unpaid</h2> : <h2 className="py-3 text-center my-4 uppercase text-green-400 font-extrabold outline-dotted outline-4 outline-green-500">paid</h2>}
                                            <div>
                                                <p className="font-medium text-sm text-gray-400"> Recept Number </p>
                                                <p> {myInvoice.receptNo} </p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm text-gray-400"> Invoice Date </p>
                                                <p>{myInvoice.date} </p>
                                            </div>

                                            <div>
                                                <a href="#j" target="_blank" className="inline-flex items-center text-sm font-medium text-blue-500 hover:opacity-75 "> Download PDF <svg className="ml-0.5 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                                </svg>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <table className="w-full divide-y divide-gray-200 text-sm">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-9 py-4 text-left font-semibold text-gray-400"> Item </th>
                                        <th scope="col" className="py-3 text-left font-semibold text-gray-400">  </th>
                                        <th scope="col" className="py-3 text-left font-semibold text-gray-400"> Amount </th>
                                        <th scope="col" className="py-3 text-left font-semibold text-gray-400"> Remission </th>
                                        <th scope="col" className="py-3 text-left font-semibold text-gray-400"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                                            <div>
                                                <p> {myInvoice.billName} </p>
                                                {/* <p className="text-sm text-gray-400"> Nuclear-armed ICBM </p> */}
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap text-gray-600 truncate"></td>
                                        <td className="whitespace-nowrap text-gray-600 truncate"> {myInvoice.totalBill}<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&#2547;</span></td>
                                        <td className="whitespace-nowrap text-gray-600 truncate"> 0% </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="p-9 border-b-2 border-dashed border-gray-200">
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-gray-500 text-sm"> Subtotal </p>
                                        </div>
                                        <p className="text-gray-500 text-sm"> {myInvoice.totalBill}<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&#2547;</span></p>
                                    </div>

                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-gray-500 text-sm"> Remission</p>
                                        </div>
                                        <p className="text-gray-500 text-sm"> 00 </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-gray-900 text-lg font-bold"> Total </p>
                                        </div>
                                        <p className="text-gray-900 text-lg  font-bold"> {myInvoice.totalBill}<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&#2547;</span></p>
                                    </div>

                                </div>
                            </div>
                            <div className="p-9 border-3 border-gray-200 border-dotted">
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-gray-500 text-sm"> Paid Amount</p>
                                        </div>
                                        <p className="text-gray-500 text-sm"> {myInvoice.paidBill}<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&#2547;</span> </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-bold text-black text-lg"> Amount Due </p>
                                        </div>
                                        <p className="font-bold text-black text-lg"> {myInvoice.deuBill ? myInvoice.deuBill : 'Paid'}{myInvoice.deuBill && <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&#2547;</span>}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-lg text-right px-16 py-12" >
                                    <span className=" border-t px-10"> Cashier</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>



    );
};


export default InvoiceDetails;