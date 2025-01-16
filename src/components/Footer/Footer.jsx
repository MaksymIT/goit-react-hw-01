const Footer = ({ brand = "C++", id }) => {
    
    console.log({brand, id})

  return (
    <footer>
        <p>{brand} {id}</p>
          
    </footer>);
};

export default Footer;