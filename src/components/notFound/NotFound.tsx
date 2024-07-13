import ErrorLogo from "./../../assets/Error.png";
import { Helmet } from 'react-helmet';
function NotFound() {
    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>404</title>
        </Helmet>
        <div className="flex flex-row justify-evenly px-5 align-middle">
            <div className="m-auto">
                <img src={ErrorLogo} className="img w-full" alt="404-Scarecrow" />
            </div>
            <div className="font-bold flex flex-col justify-center text-center gap-10 my-10 text-2xl">
                <h2 className="text-9xl">I have bad news for you</h2>
                <p className="">
                    The page you are looking for might be removed or is temporarily
                    unavailable
                </p>
                <button
                    onClick={() => (window.location.href = "/")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-full">Back to homepage</button>
            </div>
        </div>
    </>
    );
}

export default NotFound;
