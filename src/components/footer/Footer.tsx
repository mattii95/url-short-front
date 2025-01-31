
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
            <div className="container m-auto">
                <p>©️ {new Date().getFullYear()} CarpiShort. All rights reserved.</p>
                <p>
                    Developed ❤️ by {' '}
                    <a href="#" className="text-orange-400 hover:underline">Courroux</a>
                </p>
            </div>
        </footer>
    )
}
