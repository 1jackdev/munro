### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router allows us to have app routing that takes place as the app renders, making our routing behave more like a Component.

- What is a single page application?
  An SPA is single webpage that only shows the necessary information at a given time, and does not refresh every time new information is needed. Rather it updates what needs to be updated and leaves everything else "as is".

- What are some differences between client side and server side routing?
  Server-side routing can take longer to show a user new information, whereas client-side can be lightning fast. Also, SPA's only need to request data from the server once, meaning that content can still change even if the connection is weak. However, because server-side routing is the "traditional" method, things like SEO can be tricky to configure for client-side apps.


- What are two ways of handling redirects with React Router? When would you use each?
  In React Router, we can handle redirects with the 'Redirect' Component or the 'useHistory' hook. I would use the Redirect Component if most/all of my routes had static data. If I had a robust, dynamic app I would prefer to use useHistory to make sure that the user had all of their past pages in their history.

- What are two different ways to handle page-not-found user experiences using React Router? 
  One way to handle this is to use 'Redirect' to redirect to the home page. We could also use the 'Switch' component to create an implicit "Not Found" route as our last route in order.

- How do you grab URL parameters from within a component using React Router?
  We can use the useParams hook, which creates an object of the params.

- What is context in React? When would you use it?
  Context is way to share data between components and their children, like state for the whole app. It would make sense to keep something like dark-mode in Context, so that we can be sure that it stays enabled.

- Describe some differences between class-based components and function
  components in React.
  In class-based components, we use the didMount, didUpdate methods whereas in functional components we use hooks (useEffect) to handle the components lifecycle. Class-based components read like vanilla JS so they can lead to bigger files. Functional components can be kept concise and look more React-y.


- What are some of the problems that hooks were designed to solve?
  Hooks allow us to use state and other react features without having to create a class. They simplify the implementation of existing react concepts, and also allow for state (and other hooks) to be reused and consistent among different components.