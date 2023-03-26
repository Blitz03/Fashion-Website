export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Id',
      type: 'string',
      options: {
        source: 'id',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'introduce',
          title: 'Introduce',
          type: 'string',
        },
        {
          name: 'material',
          title: 'Material',
          type: 'string',
        },
      ],
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'sku',
      title: 'Sku',
      type: 'string',
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
    },
  ],
}
