'use client';

import { useRef, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '~/lib/utils';
import { PreserveParamsLink } from '../faculty-and-staff/client-components';
import { Select, SelectContent, SelectTrigger, SelectValue } from '~/components/inputs';

export function EventsArchiveDropdown({
    year,
    month,
}: {
    year?: string;
    month?: string;
}) {
    const currentYear = 2025;
    const years = Array.from({ length: 7 }, (_, i) => currentYear - i);
    const months = [
        'December', 'November', 'October', 'September',
        'August', 'July', 'June', 'May',
        'April', 'March', 'February', 'January'
    ];

    const detailsRef = useRef<HTMLDetailsElement>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const prevMonthRef = useRef(month);
    const scrollPositionRef = useRef(0);

    // Save scroll position before navigation
    useEffect(() => {
        const saveScrollPosition = () => {
            scrollPositionRef.current = window.scrollY;
        };

        window.addEventListener('click', saveScrollPosition);
        return () => window.removeEventListener('click', saveScrollPosition);
    }, []);

    // Close dropdown only when month changes (not when year changes)
    useEffect(() => {
        if (month !== prevMonthRef.current && month) {
            if (detailsRef.current) {
                detailsRef.current.removeAttribute('open');
            }
            // Restore scroll position after navigation
            setTimeout(() => {
                window.scrollTo(0, scrollPositionRef.current);
            }, 0);
        }
        prevMonthRef.current = month;
    }, [month]);

    return (
        <div className="relative sm:w-1/2 lg:w-1/3 xl:hidden">
            <details ref={detailsRef} className="group [&_a:focus]:outline-none">
                <summary className="flex cursor-pointer items-center justify-between rounded border border-primary-700 bg-white px-4 py-3 text-shade-dark list-none focus:outline-none focus:ring-2 focus:ring-primary-700">
                    <span>{year && month ? `${month} ${year}` : 'Events/News Archive'}</span>
                    <svg
                        className="h-4 w-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <div className="absolute z-50 mt-1 w-full rounded border border-neutral-200 shadow-lg max-h-96 overflow-y-auto" style={{ backgroundColor: 'white' }}>
                    {years.map((yr) => (
                        <div key={yr}>
                            <PreserveParamsLink
                                paramToUpdate="year"
                                value={year === yr.toString() ? '' : yr.toString()}
                                className={cn(
                                    'flex items-center justify-between px-4 py-2 font-semibold hover:bg-neutral-50 cursor-pointer w-full',
                                    year === yr.toString() ? 'text-primary-700' : 'text-shade-dark'
                                )}
                                
                            >
                                <span>{yr}</span>
                                <svg
                                    className={cn(
                                        'h-4 w-4 transition-transform',
                                        year === yr.toString() ? 'rotate-180 text-primary-700' : 'text-shade-dark'
                                    )}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </PreserveParamsLink>

                            {year === yr.toString() && (
                                <div style={{ backgroundColor: 'white' }} className="border-t border-neutral-100">
                                    {months.map((monthName) => (
                                        <PreserveParamsLink
                                            key={monthName}
                                            paramToUpdate="month"
                                            value={monthName}
                                            className={cn(
                                                'block px-8 py-2 text-sm hover:bg-neutral-50 hover:text-primary-700',
                                                month === monthName
                                                    ? 'font-semibold text-primary-700'
                                                    : 'text-shade-dark'
                                            )}
                                            
                                        >
                                            {monthName}
                                        </PreserveParamsLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </details>
        </div>
    );
}

export function MobileDepartmentFilter({
    departments,
    selectedDepartments,
    getUpdatedDepartments,
}: {
    departments: Array<{ id: number; name: string; urlName: string }>;
    selectedDepartments: string[];
    getUpdatedDepartments: (urlName: string) => string[];
}) {
    return (
        <Select navigate>
            <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
                <SelectValue
                    placeholder={
                        selectedDepartments.length
                            ? `${selectedDepartments.length} department${selectedDepartments.length > 1 ? 's' : ''} selected`
                            : 'Choose a department'
                    }
                />
            </SelectTrigger>
            <SelectContent>
                {departments.map(({ name, urlName }, index) => (
                    <div key={index} className="flex items-center px-2 py-1">
                        <input
                            type="checkbox"
                            id={`mobile-department-${urlName}`}
                            className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                            checked={selectedDepartments.includes(urlName)}
                            readOnly
                        />
                        <PreserveParamsLink
                            paramToUpdate="department"
                            value={getUpdatedDepartments(urlName)}
                            className="ml-2 w-full py-1"
                        >
                            {name}
                        </PreserveParamsLink>
                    </div>
                ))}
            </SelectContent>
        </Select>
    );
}