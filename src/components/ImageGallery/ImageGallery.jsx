import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <StyledGallery>
      {images.map(image => {
        const { id, tags, webformatURL, largeImageURL } = image;
        return (
          <ImageGalleryItem
            key={id}
            description={tags}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            onModalClick={onModalOpen}
          />
        );
      })}
    </StyledGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  onModalClick: PropTypes.func,
};

const StyledGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;