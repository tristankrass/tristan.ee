import React, { useEffect } from 'react';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';
// const searchIndices = [
//   { name: `Projects`, title: `Projects`, hitComp: `ProjectsHit` },
//   { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
// ];

const IndexPage = props => {
  // TODO: Add user authentication
  // const [user, setUser] = useState(null);
  useEffect(() => {
    // const lazyApp = import('firebase/app');
    // const lazyDatabase = import('firebase/database');
    // Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
    //   const database = getFirebase(firebase).database();
    //   // do something with `database` here,
    //   // or store it as an instance variable or in state
    //   // to do stuff with it later
    // });
  }, []);
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" />
      <h1 className="title is-1">Hey!</h1>
      <p className="subtitle is-3">
        I am a full-stack Dev, currently studying at Tal Tech.✌️
      </p>

      <h2>Github stuff comes here.••••</h2>

      <section className=""></section>
    </Layout>
  );
};

// function signInUI() {
//   return (
//     <div>
//       <button
//         onClick={() =>
//           auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
//         }
//       >
//         SignIn with Google
//       </button>
//     </div>
//   );
// }

// const signOutUI = user => (
//   <div>
//     <p>{JSON.stringify(user)}</p>

//     <hr />

//     <button onClick={() => sendEmail()}>
//       Send Email with Callable Function
//     </button>

//     <button onClick={() => auth.signOut()}>SignOut</button>
//   </div>
// );

// const sendEmail = () => {
//   const callable = functions.httpsCallable('genericEmail');
//   return callable({
//     text: 'Sending email with React and SendGrid is fun!',
//     subject: 'Email from React',
//   }).then(console.log);
// };

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
