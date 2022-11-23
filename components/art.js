import styles from '../styles/Art.module.css'

/**
 * Animation delays align with keyframes in Art.modules.css to create
 * typing effect line-by-line.
 */
const DummyCode = () => {
  return (
    <div>
      <p className={styles.codeline} style={{ animationDelay: '2s' }}>
        public class HelloWorld &#123;
      </p>
      <p className={`${styles.codeline} pl-2`} style={{ animationDelay: '4s' }}>
        public static void main(String[] args) &#123;
      </p>
      <p className={`${styles.codeline} pl-4`} style={{ animationDelay: '6s' }}>
        String hello = &quot;Hello! Thank you for visiting my personal website
        today.&quot;;
      </p>
      <p className={`${styles.codeline} pl-4`} style={{ animationDelay: '8s' }}>
        String enjoy = &quot;I hope you enjoy your time here!&quot;;
      </p>
      <p
        className={`${styles.codeline} pl-4`}
        style={{ animationDelay: '10s' }}
      >
        System.out.println(hello + enjoy);
      </p>
      <p
        className={`${styles.codeline} pl-2`}
        style={{ animationDelay: '11s' }}
      >
        &#125;
      </p>
      <p className={styles.codeline} style={{ animationDelay: '12s' }}>
        &#125;
      </p>
    </div>
  )
}

// TODO: Tell a joke
const Joke = () => {
  return (
    <div>
      <p>public class Joke &#123;</p>
      <p className="pl-2">public static void main(String[] args) &#123;</p>
      <p className="pl-4">&#47;&#47; Would you like to hear a joke?</p>
      <p className="pl-4">
        String joke = &quot;Why did the Python programmer have crooked
        teeth?&quot;;
      </p>
      <p className="pl-4">String punchLine = &quot;No braces.&quot;;</p>
      <p className="pl-4">System.out.println(joke + punchLine);</p>
      <p className="pl-2">&#125;</p>
      <p>&#125;</p>
    </div>
  )
}

const Art = () => {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.innerscreen}>
          <div className={`${styles.dummycode} select-none`}>
            <DummyCode />
          </div>
        </div>
      </div>
      <div className={styles.person}>
        <div className={styles.leftarm}></div>
        <div className={styles.head}>
          <div className={styles.hair}></div>
        </div>
        <div className={styles.rightarm}></div>
      </div>
      <div className={styles.desk}>
        <div className={styles.mug}>
          <div className={styles.mugshadow}></div>
          <div className={styles.mughandle}></div>
        </div>
        <div className={styles.lampbase}>
          <div className={styles.lowerarm}></div>
          <div className={styles.upperarm}></div>
          <div className={styles.lamphouse}></div>
          <div className={styles.lamphead}></div>
          <div className={`${styles.lampshadow} hidden dark:block`}></div>
        </div>
      </div>
    </div>
  )
}

export default Art
