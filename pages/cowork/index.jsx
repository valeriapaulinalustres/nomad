import styles from '../../styles/Layout.module.css'
import Layout from '../../components/layout'

export default function Alojate() {

  return (
    <Layout title="Nomad | Co-work" description="Working around the world" >
      <div className={styles.otherPages}>
        <h2>Co-work</h2>
      </div>
    </Layout>
  )
}
