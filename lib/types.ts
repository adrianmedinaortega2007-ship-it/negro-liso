export interface Producto { nombre: string; url: string; precio?: string; imagen?: string; }
export interface Categoria { id: string; categoria: string; productos: Producto[]; }
