import App from 'next/app'
import React from 'react'
import 'antd/dist/antd.css';
import Navigator from '../components/Navigator';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <>
      <Navigator/>
      <Component {...pageProps} />
    </>
  }
}
