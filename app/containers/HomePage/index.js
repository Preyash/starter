import React from 'react';
import Layout from 'components/Layout'

const clg = (...str) => console.log(...str)

export default function HomePage() {
  return (
    <Layout>
      <h1 className="display-3">No Redux, React boilerplate</h1>
      <p className="lead">
        by Preyash Hojiwala
      </p>
    </Layout>
  );
}
