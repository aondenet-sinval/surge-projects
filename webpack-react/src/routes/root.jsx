import React, { Suspense, lazy } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Outlet, Link } from 'react-router-dom';
import Navigation from '../components/Navigation'
import SidebarLeft from '../components/SidebarLeft'
import Sidebar from '../components/Sidebar'
import { HelmetProvider } from 'react-helmet-async'
// import Sistemas from '../components/Sistemas'
import MyFooter from '../components/Footer'
import { Helmet } from 'react-helmet'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import '../App.css'
export default function Root() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const mobile = 'row-first mini d-flex'
  const desktop = 'row-first desk d-flex'
  const MyLazySistema = lazy(() => import('../components/Sistemas'));
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
    <Container  fluid>
      <Navigation />
      <Row className={isMobile ? mobile : desktop}>
        <Col  md={4} className="sidebar text-white margin-block">
          {isMobile ? <Outlet /> : <SidebarLeft />}
        </Col>
        <Col md={7} id="detail" className="page-main text-white margin-block">
          {isMobile ? <SidebarLeft /> : <Outlet />}
        </Col>
      </Row>
      <Row className={isMobile ? mobile : desktop}>
        <Col md={7} id="detail" className="page-footer text-white">
        <Suspense fallback={<Spinner animation="grow" role="status" />}>
          <MyLazySistema />
        </Suspense>
        </Col>
        <Col  md={4} className="sidebar-right text-white">
          <Sidebar />
        </Col>
      </Row>
      <MyFooter />
    </Container>
    </HelmetProvider>
  );
}
