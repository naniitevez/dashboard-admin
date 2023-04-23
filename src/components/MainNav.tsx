import * as React from "react";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav";
import styles from "@/styles/MainNav.module.css";
import { Icon } from "@fluentui/react";

const navStyles: Partial<INavStyles> = {
  root: {
    boxSizing: "border-box",
    overflowY: "auto",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home",
        url: "/",
        key: "key1",
        icon: "Home",
      },
      {
        name: "Sellers",
        url: "/sellers",
        key: "key2",
        icon: "Telemarketer",
      },
      {
        name: "Pages",
        url: "http://msn.com",
        key: "key3",
        target: "_blank",
      },
      {
        name: "Notebook",
        url: "http://msn.com",
        key: "key4",
        disabled: true,
      },
    ],
  },
];

export const MainNav: React.FunctionComponent = () => {
  return (
    <div className={styles.nav}>
      <Nav
        selectedKey="key1"
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
      />
      <div>
        <div className="separator"></div>
        <div className={styles.collapsible}>
          <button className={styles.toggleButton}>
            <Icon iconName="DoubleChevronLeft12" />
          </button>
        </div>
      </div>
    </div>
  );
};
