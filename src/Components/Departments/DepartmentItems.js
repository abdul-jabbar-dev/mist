import React from 'react';








const DepartmentItems = ({ name, img }) => {
    return (
        <div >
            <div className="card bg-[#15263F]  mx-auto h-[23rem] w-80 rounded-xl p-6 space-y-4">
                <a href="#d">
                    <img className="w-full h-64 rounded-md transition hover:bg-cyan-300"
                        src={img}
                        alt={name} />
                </a>
                <div id="description" className="space-y-4">
                    <a href="#d">
                        <h2 className="text-white font-semibold text-xl transition hover:text-cyan-300">
                            {name}
                        </h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DepartmentItems;