import styles from '../../styles/Layout.module.css'
import Layout from '../../components/Layout'

export default function Alojate() {

  return (
    <Layout headTitle="Nomad | Co-work" headDescription="Working around the world" >
      <div className={styles.otherPages}>
        <h2>Co-work</h2>
      </div>
    </Layout>
  )
}
