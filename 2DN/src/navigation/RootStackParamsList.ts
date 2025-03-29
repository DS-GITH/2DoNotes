type MenuPageParams = {
    
};

type AddingPageParams = {
    
};

export type RootStackParamsList = {
    Menu: undefined;
    Adding: { task?: { id: number; title: string; description: string; photo: string } }; 
};