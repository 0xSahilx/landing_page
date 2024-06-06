const WithRedLeftBar = ({ children, width }) => {
    return <div className="flex">
        <div className="bg-red-500 mr-[50px]"
            style={{ width: `${width}px` }}
        >

        </div>
        {children}
    </div>
};
export default WithRedLeftBar;

