export type ServiceLink = {
  label: string;
  href: string;
};


export type ServiceGroup = {
  title: string;
  href?: string;
  links: ServiceLink[];
};

export type ServiceColumn = {
  id: string;
  label: string;
  logo?: string; 
  groups: ServiceGroup[];
  viewAllHref: string;
};

export type ServicesMenuProps = {
  isOpen: boolean;
};
