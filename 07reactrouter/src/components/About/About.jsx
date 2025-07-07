import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://imgs.search.brave.com/j3m4Y6mmsEJLCs__IH1RbCN6vPDNJbgd6jWZV0yenZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vcHRp/bWl6b3J5LmNvbS9h/c3NldHMvaW1nL3By/b2R1Y3Rpdml0eS1i/bG9nL2ltcG9ydGFu/dC5qcGc"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        In the modern era of web development, React has emerged as one of the most popular JavaScript libraries for building user interfaces. A React Developer is a professional who specializes in developing front-end applications using React.js. With the increasing demand for dynamic and responsive web applications, the role of a React developer has become crucial in the software development industry.
                        </p>
                        <p className="mt-4 text-gray-600">
                        A React Developer plays a significant role in modern web development by building interactive and scalable web applications. With the continuous evolution of technology, React remains one of the most sought-after skills in the industry. By mastering React and related technologies, developers can open doors to numerous career opportunities and contribute to the ever-growing field of web development
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
