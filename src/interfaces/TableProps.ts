export interface ColumnHeaderProps {
  name: string;
  align?: 'left' | 'center' | 'right';
}

export interface CellProps {
  value: string;
  align?: 'left' | 'center' | 'right';
  type?: 'normal' | 'avatar' | 'badge';
}

export interface ColumnBodyProps {
  rows: CellProps[]
}

export interface TableProps {
  columnHeader: ColumnHeaderProps[];
  columnBody: ColumnBodyProps[]; 
}

export interface StyledChipProps {
  status: "Ativo" | "Inativo";
}