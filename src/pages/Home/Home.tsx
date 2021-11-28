import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import ItemComponent from "../../components/Item/Item";
import mock_items from "../../mocks/item";
import Item from "../../models/Item";
import ItemDetails from "../ItemDetails/ItemDetails";

function Home() {
  // Original Items
  const [items, setItems] = useState<Item[]>([]);
  const [isShowItemDetails, setIsShowItemDetails] = useState<boolean>(false);

  // Working Items
  const [workingItems, setWorkingItems] = useState<Item[]>([]);

  // Get api
  useEffect(() => {
    setItems(mock_items);
  }, []);

  useEffect(() => {
    setWorkingItems(items);
  }, [items]);

  return (
    <>
      <Header items={items} setWorkingItems={setWorkingItems} />
      <Container>
        <Row>
          {workingItems.length > 0 ? (
            <>
              {workingItems.map((item: Item) => (
                <Col key={item.id} sm="4" className="p-3">
                  <ItemComponent
                    title={item.title}
                    price={`Price ${item.price} - ${item.currency}`}
                    coverImg={item.coverImg}
                    setIsShowItemDetails={setIsShowItemDetails}
                  />
                </Col>
              ))}
            </>
          ) : (
            <Col xs="12">
              <p className="text-center">Not Found.</p>
            </Col>
          )}
        </Row>
      </Container>
      {/* Showing item details */}
      {isShowItemDetails && (
        <ItemDetails
          isShowItemDetails={isShowItemDetails}
          setIsShowItemDetails={setIsShowItemDetails}
        />
      )}
      {/* End showing item details */}
    </>
  );
}

export default Home;
