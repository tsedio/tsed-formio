export interface ColumnIdentifier {
  /**
   * Column identifier
   */
  id: string;
  /**
   * Filter value
   */
  value?: any;
  /**
   * Sort order
   */
  desc?: boolean;
}

export interface Column {
  /**
   * Custom Header ReactComponent
   */
  Header: Node | string;
  /**
   * Path to display value in the data collection
   */
  accessor: string;
  /**
   * Column identifier
   */
  id: string;
  /**
   * Custom Cell ReactComponent
   */
  Cell?: Node;
  /**
   * Custom filter ReactComponent
   */
  Filter?: Node;
}
