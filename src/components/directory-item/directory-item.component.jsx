import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BodyContainer,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onClickHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onClickHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <BodyContainer>
        <h2>{title}</h2>
        <span>Shop Now</span>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
