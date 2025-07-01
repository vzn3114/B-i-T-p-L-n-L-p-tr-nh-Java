package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fertilitycare.backend.entity.Appointment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.AppointmentRepository;
import com.fertilitycare.backend.service.AppointmentService;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentServiceImpl(AppointmentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Appointment create(Appointment appointment, User customer) {
        appointment.setCustomer(customer);
        appointment.setStatus("Đang chờ");
        return repository.save(appointment);
    }

    @Override
    public List<Appointment> getByCustomer(User customer) {
        return repository.findByCustomer(customer);
    }

    @Override
    public List<Appointment> getAll() {
        return repository.findAll();
    }

    @Override
    public void cancel(Long id, User customer) {
        Appointment a = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy lịch hẹn"));
        if (!a.getCustomer().getId().equals(customer.getId())) {
            throw new RuntimeException("Không có quyền hủy lịch hẹn này");
        }
        a.setStatus("Đã hủy");
        repository.save(a);
    }

    @Override
    public List<Appointment> getByDoctor(User doctor) {
        return repository.findByServiceDoctor(doctor);
    }

}
