type MenuPageParams = {
    
};

type AddingPageParams = {
    
};

export type RootStackParamsList = {
    Menu: undefined;
    Adding: { task?: { id: number; title: string } }; // Tela Adding pode receber uma tarefa (opcional)
};