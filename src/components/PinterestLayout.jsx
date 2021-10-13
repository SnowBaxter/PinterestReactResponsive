import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' long='small_icons' image='https://i.pinimg.com/564x/0b/7f/a6/0b7fa626d624e4d69220c64e8613d6be.jpg' />
      <PinCard size='medium'long='medium_icons' image= 'https://i.pinimg.com/564x/77/58/b4/7758b46e1dd0fa0e9d490b1881031a2f.jpg' />
      <PinCard size='large'long='large_icons'image='https://i.pinimg.com/564x/ef/7f/6c/ef7f6c6d963254dd21ad5ee45d316011.jpg' />
      <PinCard size='small' long='small_icons'image='https://i.pinimg.com/236x/e0/ae/32/e0ae32d3379f345ab806182823a8a50e.jpg'/>
      <PinCard size='medium' long='medium_icons' image='https://i.pinimg.com/564x/21/29/ee/2129ee62c03cbda1fff8b5a09f3b3ffc.jpg'/>
      <PinCard size='large' long='large_icons' image='https://i.pinimg.com/564x/56/9e/d5/569ed53b4c3f70eb7989429f37bec191.jpg'/>
      <PinCard size='small' long='small_icons' image='https://i.pinimg.com/564x/c2/eb/1b/c2eb1bd109df37a827ad5844ab2f0a85.jpg'/>
      <PinCard size='medium' long='medium_icons'image='https://i.pinimg.com/564x/2b/ed/ce/2bedce3a51a49554dec4213357421ee6.jpg' />
      <PinCard size='large'  long='large_icons' image='https://i.pinimg.com/564x/9f/ab/8e/9fab8e6e2466d8b2480743a9fd9621df.jpg'/>
      <PinCard size='small' long='small_icons' image='https://i.pinimg.com/564x/2c/1e/03/2c1e032e17c3265e70d9654c4deb263e.jpg'/>
      <PinCard size='medium' long='medium_icons' image='https://i.pinimg.com/564x/10/88/a1/1088a1a3203bebe2514d01f54405a4d1.jpg' />
      <PinCard size='large' long='large_icons' image='https://i.pinimg.com/564x/fe/54/a5/fe54a5b2711a9311cbd3ca9a6eb7b13f.jpg'/>
      <PinCard size='small' long='small_icons' image='https://i.pinimg.com/564x/d4/8a/ec/d48aec9273dea3a2a6b597646746645f.jpg'/>
      <PinCard size='medium' long='medium_icons' image='https://i.pinimg.com/236x/ad/4d/ac/ad4dac0f7f893fe1bfad4796beea0d65.jpg'/>
      <PinCard size='large' long='large_icons' image='https://i.pinimg.com/564x/7b/b2/7e/7bb27e927954a15f91ab847f2d2ceda4.jpg'/>
      <PinCard size='small' long='small_icons' image='https://i.pinimg.com/564x/bd/86/63/bd8663515b91a7bc1f8214b0ceb66e3d.jpg'/>
      <PinCard size='medium' long='medium_icons' image='https://i.pinimg.com/564x/13/c2/7a/13c27a4e6365d97e20cf7b88f49bc27c.jpg'/>
      <PinCard size='large' long='large_icons' image='https://i.pinimg.com/236x/91/2d/14/912d142cb3fc5fd782029258c919082a.jpg'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },
};

export default PinterestLayout;
