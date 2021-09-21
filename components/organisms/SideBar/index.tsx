import Footer from './Footer';
import MenuItem from './Menuitem';
import Profile from './profile';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem active title="Overview" icon="ic-menu-overview" />
          <MenuItem title="Transactions" icon="ic-menu-transaction" />
          <MenuItem title="Messages" icon="ic-menu-messages" />
          <MenuItem title="Card" icon="ic-menu-card" />
          <MenuItem title="Rewards" icon="ic-menu-reward" />
          <MenuItem title="Settings" icon="ic-menu-setting" />
          <MenuItem title="Logout" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
