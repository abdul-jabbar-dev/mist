import React from 'react';

const AdministratorInfo = [
    { name: 'Engr.Mohammad Mustakim', img: 'https://mistte.org/wp-content/uploads/elementor/thumbs/20191102_160658-p13k5dgrzrivjae9eac7zqje1r455qytixyboyp2a8.jpg', phoneNumber: '', eduQualification: '', designation: 'Chairman' },
    {
        name: 'Prof. Dr. Engr. Mohammad Abdul Mannan', img: 'https://mistte.org/wp-content/uploads/elementor/thumbs/mannan-ordo2x5dgj34ue3l9vjbvwc9yk427fc93zep7k2c40.jpg', phoneNumber: '', eduQualification: '', designation: 'Founder And Director Honorary'
    },
    {
        name: 'Dr. Md. Haider Alam', img: 'https://mistte.org/wp-content/uploads/elementor/thumbs/01-p13nrmxl47uehv6jr3dy1d61p32cvp3ofonqyfjxzk.jpg', phoneNumber: '+88-0171518603', eduQualification: 'B.Sc.(Math,D U)', designation: 'Deputy Director'
    },
    { name: 'Dr.Engr.Pronab Kumar Saha', img: 'https://mistte.org/wp-content/uploads/elementor/thumbs/pinto-p13ns3uoj8hkauhz0ap8a8wce0qyq8yui0ehleuuvk.jpg', phoneNumber: '+88 01839911604', eduQualification: 'Ph.D (Technical Edu. USA)', designation: 'Exam Controller and Associate Professor' },
    { name: 'Mohammad Amir Hasnat Khan Pathan', img: 'https://mistte.org/wp-content/uploads/elementor/thumbs/ahkp-p13nrx9t7e8k1krj2puuask48bne8d8q53u38h4m34.jpg', phoneNumber: '+88 01839911608', eduQualification: 'MBA (Finance UU)', designation: 'Assistant Professor' },
    { name: 'Md. Ariful Haque', img: 'https://mistte.org/wp-content/uploads/elementor/thumbs/Arif-p13nrz5hl2b4ososrqo3fs31f3e4nrg6td52711tqo.jpg', phoneNumber: '+88-01839911621', eduQualification: 'MBA (Finance South Est. Uni)', designation: 'Assistant Director (Admin & Finance)' },
    { name: 'Mst.Selina Akter', img: 'https://mistte.org/wp-content/uploads/elementor/thumbs/20191102_160637-p13k5cixsxhl7ofmjrxlf8rxgd8ry1v36tau7oqggg.jpg', phoneNumber: ' +88-01763965163', eduQualification: 'BBA (Management)', designation: 'Section Officer' },
]
const AdminList = () => {
    return (

            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div className=" w-full h-full">
                    {/* <!-- Table --> */}
                    <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Administrators</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Designation </div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Educational Qualification </div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Phone </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                        AdministratorInfo.map((profile, i) => <tr key={i}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-16 h-16 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={profile.img} width="80" height="80" alt="Alex Shatov" /></div>
                                                        <div className="font-medium text-gray-800">{profile.name}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{profile.designation}</div>
                                                </td>

                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left ">{profile.eduQualification}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left ">{profile.phoneNumber}</div>
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

    );
};

export default AdminList;