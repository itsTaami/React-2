const NavItems = [

    { name: "Portfolio", link:"#", className:"NavItem"},

    { name: "Blog", link:"#", className:"NavItem"},

    { name: "CV", link:"#", className:"NavItem"},

    { name: "Store", link:"#", className:"NavItem"},

    { name: "Freelance", link:"#", className:"NavItem"},

    { name: "About Me", link:"#", className:"NavItem"},

    { name: "Contact", link:"#", className:"NavItem"}

];
export const Header = ()=>{

    return(
        <div>
            <div className="left">
            <img src="/images/Logo.svg" alt=""/>
            <img src="/images/Hire Me.svg" alt=""/>
            </div>
            <div className="right">
                {
                    NavItems.map((item) => { 
                        return(

                        <a href="{item.link}" className="{item.className}">{item.name}</a>
                        )



                    })
                }

            </div>
        </div>
    );
    
};