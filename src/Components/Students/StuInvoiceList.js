import React from 'react';
import { AiOutlineCloudDownload } from "@react-icons/all-files/ai/AiOutlineCloudDownload";


const invoices = [
    { billName: 'January to March', date: '15/01/2021', totalBill: 15000, paidBill: 10000, deuBill: 5000, invoiceId: '001451', receptNo: '645', status: 'panding' },
    { billName: 'Semister 2nd Installment', date: '03/01/2021', totalBill: 5000, paidBill: 5000, deuBill: '', invoiceId: '00121', receptNo: '234', status: 'Paid' },
    { billName: 'Semister 1st Installment', date: '01/01/2021', totalBill: 4500, paidBill: 4500, deuBill: '', invoiceId: '00120', receptNo: '127', status: 'Paid' },
    { billName: 'December', date: '21/12/2020', totalBill: '1500', paidBill: 1500, deuBill: '', invoiceId: '00141', receptNo: '455', status: 'Paid' }
]



const StuInvoiceList = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <section class="antialiased bg-gray-900 text-gray-600  px-4 w-full">
                <div class=" h-full w-full" >
                    {/* <!-- Table --> */}
                    <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Customers</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr >
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Bill Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Essu date</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Total bill</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Paid Bill</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Deu Bill</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Recept No.</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Bill status</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Invoice</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {
                                            invoices.map((invoice) => <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-gray-800">{invoice.billName}</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="">{invoice.date}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-green-500">{invoice.totalBill}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-center font-semibold">{invoice.paidBill}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class=" text-center font-semibold text-red-500">{invoice.deuBill && invoice.deuBill}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class=" text-center font-semibold">{invoice.receptNo}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap text-center">
                                                    <div class={invoice.status === 'Paid' ?'rounded-full text-white bg-blue-400 py-1 px-4 inline':'rounded-full text-white bg-red-400 py-1 px-4 inline'}>{invoice.status}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center px-auto"><AiOutlineCloudDownload className='mx-auto hover:cursor-pointer ' /></div>
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