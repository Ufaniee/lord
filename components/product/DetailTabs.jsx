import React, {useState} from 'react'
import ProductReview from './ProductReview';
import ProductDescription from './ProductDescription';
import ProductDiscussion from './ProductDiscussion';
import GiftCards from './GiftCards';

const tabs = [`Reviews (${200})`,"Description","Discussion","Gift Cards"]

const DetailTabs = () => {
    const [tab, setTab] = useState(1);

    const displayTabs = (tab) => {
        switch(tab) {
            case 1:
                return <ProductReview/>;
                break;
            case 2:
                return <ProductDescription/>
                break;
            case 3:
                return <ProductDiscussion/>
                break;
            case 4:
                return <GiftCards/>
                break;
            default:
                return
        }
    }

  return (
    <>
        <ul className='flex gap-4 text-colorBold mb-5'>
            {tabs.map((tabName, index) => (
                <li key={index} className={` ${tab === (index + 1) && 'text-primary border-b-2'} border-primary pb-2 cursor-pointer`} onClick={() => setTab((index + 1))}>{tabName}</li>
            ))}
        </ul>
        <div>
            <div className='w-1/2 border-r border-gray'>
                {displayTabs(tab)}
            </div>
            <div></div>
        </div>
    </>
  )
}

export default DetailTabs