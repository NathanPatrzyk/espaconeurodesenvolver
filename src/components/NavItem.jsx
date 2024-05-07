import IconSeeMore from "../assets/see-more.svg";

const NavItem = (props) => {
  if (props.childrens)
    return (
      <div className="text-dark-neuro font-medium md:p-0 p-2 hover:opacity-80 cursor-pointer duration-500">
        <a href={props.link}>{props.name}<img className="inline ps-2 pb-0.5" src={IconSeeMore} /></a>
				{props.childrens.map((children) => (
          <a href={children.link}>{children.name}</a>
        ))}
				{/* CONTINUAR SEGUINDO O VIDEO DO YOUTUBE PARA FAZER ABRIR E FECHAR O MENU DE CADA ITEM DA NAV ... */}
      </div>
    );
  else {
    return (
      <div className="text-dark-neuro font-medium md:p-0 p-2 hover:opacity-80 cursor-pointer duration-500">
        <a href={props.link}>{props.name}</a>
      </div>
    );
  }
};

export default NavItem;
