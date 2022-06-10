import React, { useEffect, useState } from 'react';
import { AiOutlineCloudDownload } from "@react-icons/all-files/ai/AiOutlineCloudDownload";
import { MdZoomOutMap } from "@react-icons/all-files/md/MdZoomOutMap";
import InvoiceDetails from './invoice/InvoiceDetails';
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose";
import { Link } from 'react-router-dom';
import { invoices } from '../../Api/invoice';




const StuInvoiceList = () => {
    const [allInvoice, setAllInvoice] = useState([]);
    useEffect(() => {
        setAllInvoice(invoices)
    }, []);
    return (
        <div>
            {/* <!-- component --> */}
            <section className="antialiased bg-gray-900 text-gray-600  px-4 w-full">
                <div className=" h-full w-full" >
                    {/* <!-- Table --> */}
                    <div className="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Customers</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr >
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-light  text-left">Invoice No.</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Bill Name</div>
                                            </th>

                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Essu date</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Total bill</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Paid Bill</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Deu Bill</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Recept No.</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Bill status</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Invoice</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            allInvoice.map((invoice, i) => <tr key={i}>
                                                <td className="p-2 whitespace-nowrap" >
                                                    <div className="">#{invoice.invoiceId}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">{invoice.billName}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="">{invoice.date}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-green-500">{invoice.totalBill}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-center font-semibold">{invoice.paidBill}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className=" text-center font-semibold text-red-500">{invoice.deuBill && invoice.deuBill}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className=" text-center font-semibold">{invoice.receptNo}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap text-center">
                                                    <div className={invoice.status === 'Paid' ? 'rounded-full text-white bg-blue-400 py-1 px-4 inline' : 'rounded-full text-white bg-red-400 py-1 px-4 inline'}>{invoice.status}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center px-auto flex justify-center items-center">
                                                        <AiOutlineCloudDownload className='mx-auto hover:cursor-pointer ' />
                                                        <Link to={`${invoice.invoiceId}`}><MdZoomOutMap className=' cursor-pointer'></MdZoomOutMap></Link>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default StuInvoiceList;