export interface AllProducts {
    id: number;
    product_no: string;
    product_name: string;
    product_description: string;
    product_price: number;
    product_discount: number;
    product_featured: number;
    product_sizes: string;
    product_colors: string;
    units_in_stock: number;
    product_images: string;
    product_promo: number;
    category_id: number;
    supplier_id: number;
    suggested_sales_price: number;
    units_on_order: number;
    reorder_level: number;
    product_available: number;
    unit_price: number;
}



/*
export interface AllProducts {
    product_id: number;
    product_no: string;
    product_name: string;
    product_description: string;
    product_price: number;
    product_discount: number;
    product_featured: boolean;
    product_sizes: string;
    product_colors: string;
    units_in_stock: number;
    product_promo: boolean;
    category_id: number;
    supplier_id: number;
    suggested_sales_price: number;
    units_on_order: number;
    reorder_level: number;
    product_available: boolean;
    unit_price: number;
    image_id: number;
}

*/