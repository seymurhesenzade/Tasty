import "../HomePage/index.scss";
import Body from "../../layout/Body/index";
import CardList from "../../components/CardList/CardList";
import { Helmet } from "react-helmet";
import { Col, Row, Card } from "antd";
import { RiStarSFill } from "react-icons/ri";

const { Meta } = Card;
const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HomePage</title>
      </Helmet>
      <Body />
      <CardList />
      {/* ------------------------------------------------------------------ */}
      <div className="container">
        <section id="guests">
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            Our Satisfied Guests says
          </h1>
          <Row gutter={16} style={{ marginTop: "80px", textAlign: "center" }}>
            <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{
                  width: 350,
                }}
                cover={
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      marginLeft: "130px",
                    }}
                    alt="example"
                    src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                  />
                }
              >
                <div className="stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <Meta
                  title="Lorem ipsum dolor sit"
                  description="www.instagram.com"
                />

                <br />
                <h5>Dennis Green</h5>
                <p>Guests from Italy</p>
              </Card>
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{
                  width: 350,
                }}
                cover={
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      marginLeft: "130px",
                    }}
                    alt="example"
                    src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                  />
                }
              >
                <div className="stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <br />
                <h5>Dennis Green</h5>
                <p>Guests from Italy</p>
              </Card>
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{
                  width: 350,
                }}
                cover={
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      marginLeft: "130px",
                    }}
                    alt="example"
                    src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                  />
                }
              >
                <div className="stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <Meta
                  title="Lorem impsum dolor"
                  description="www.instagram.com"
                />
                <br />
                <h5>Dennis Green</h5>
                <p>Guests from Italy</p>
              </Card>
            </Col>
          </Row>
        </section>
      </div>

      <section id="blog">
        <h1>Recent Blog</h1>
        <div className="container">
          <div className="cards">
            <Row gutter={16} style={{ textAlign: "center", marginTop: "50px" }}>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <Card
                  hoverable
                  style={{
                    width: 300,
                    height: 250,
                  }}
                  cover={
                    <img
                      style={{ height: "250px" }}
                      alt="example"
                      src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg"
                    />
                  }
                >
                  <Meta
                    title="Lorem ipsum dolor"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <Card
                  hoverable
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      style={{ height: "250px" }}
                      alt="example"
                      src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <Card
                  hoverable
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      style={{ height: "250px" }}
                      alt="example"
                      src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg"
                    />
                  }
                >
                  <Meta
                    title="Lorem ipsum dolor sit"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
