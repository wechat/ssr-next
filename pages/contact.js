import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/Layout.js'

export default class contact extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { data: json }
  }

  transfer(){
    return JSON.stringify(this.props.data.stargazers_count)
  }
  
  render () {
    return (
      <div>
        <Layout>
          <div>
            <p>Contact</p>
            <p>next.js 仓库目前 star 数量： {this.transfer()} ⭐️</p>
          </div>
        </Layout>
        <style jsx>{`
        p {
          color: blue;
        }
        `}</style>
      </div>
    )
  }
}
