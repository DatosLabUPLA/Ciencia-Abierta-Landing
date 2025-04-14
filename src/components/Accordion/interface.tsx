export interface IAccordion {
    sectionName: string;
    children: React.ReactNode;
    closedStyles?: {
        color?: string;
        backgroundColor?: string;
    };
    openStyles?: {
        color?: string;
        filter?: string;
        backgroundColor?: string;
    };
}