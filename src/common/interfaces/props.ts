export interface IFlexProps {
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "center" | "flex-end";
  flex?: number;
  flexDirection?: "row" | "column";
  alignSelf?: "flex-start" | "center" | "flex-end";
  flexWrap?: "no-wrap" | "wrap";
}
