import UserRoutes from './UserRoutes.js'
import SensorRoutes from './SensorRoutes.js'
// import NotificationRoutes from './NotificationRoutes.js'
export default function(app)
{
    app.use('/user', UserRoutes);
    app.use('/sensor',SensorRoutes);
    // app.use('/notification',NotificationRoutes);
   
};