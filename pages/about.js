import Layout from '../components/Layout.js'

export default () => {
  return (
    <div>
      <Layout>
        <p>About us</p>
      </Layout>
      <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  )
}