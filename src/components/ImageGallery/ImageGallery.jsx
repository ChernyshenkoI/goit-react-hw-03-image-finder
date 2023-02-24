import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledGallery } from './Styled';



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

