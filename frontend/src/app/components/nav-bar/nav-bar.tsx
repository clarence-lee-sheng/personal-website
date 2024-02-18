import NavItem from "./nav-item";

export default function NavBar() {
    const navItems = [
        {id: 0, name: "Home", path: "/"},
        {id: 1, name: "Books", path: "/books"},
        {id: 2, name: "Design", path: "/design"}, 
        {id: 3, name: "Projects", path: "/projects"},
        {id: 4, name: "Art", path: "/art"}, 
        {id: 5, name: "Publications", path: "/publications"}

    ]
    navItems.map((item, index) => {
        console.log(item)
    
    })
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                {navItems.map(item => <NavItem key={item.id} name={item.name} path={item.path}/>)}
            </div>
        </div>
    )
}
