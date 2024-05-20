import type { Schema, Attribute } from '@strapi/strapi';

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'images';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    url: Attribute.String;
  };
}

export interface LocationLocation extends Schema.Component {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    country: Attribute.String;
    city: Attribute.String;
    street: Attribute.String;
    postal_code: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'images.images': ImagesImages;
      'location.location': LocationLocation;
    }
  }
}
